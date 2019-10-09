import { colors } from '@giphy/react-giphy-brand'
import React, { Fragment, useEffect, useState } from 'react'
import Fields, { FIELDS, Label, FieldUpdate } from 'shared/components/form/fields'
import BlockEnterSubmit from 'shared/components/form/inputs/block-enter-submit'
import GenderButtonGroup from 'shared/components/form/inputs/gender-button-group'
import styled from 'styled-components'
import { SaveHandler, AckResponseErrorHandler, useSaveForm } from '../../settings'
import { ButtonGroups, CTAButton, FieldSection, FooterTip, FormContainer, Header } from './sc'
import { IProfilePowerUser } from 'shared/types/user'

const GenderButtons = styled(GenderButtonGroup)`
    width: 100%;
`

const ChannelContainer = styled(ButtonGroups)`
    margin-bottom: 12px;
    text-align: left;
    font-size: 14px;
`

const Channel = styled.a`
    font-size: 12px;
    color: ${colors.giphyLightGrey};
    cursor: pointer;
    &:hover {
        color: ${colors.giphyWhite};
    }
`

const ArtistBrandUsername = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const Username = styled.div``

type Props = {
    csrftoken?: string
    user: IProfilePowerUser
    className?: string
    saveHandler: SaveHandler
    ackResponseError: AckResponseErrorHandler
    responseErrors: object
}

const SettingsForm = ({ user, className, saveHandler, ackResponseError, responseErrors }: Props) => {
    const { user_type } = user
    const isBrandOrArist = user_type === 'partner' || user_type === 'artist'

    const [submitEnabled, setSubmitEnabled] = useState<boolean>(false)
    const [form1Valid, setForm1Valid] = useState<boolean>(isBrandOrArist)
    const [form2Valid, setForm2Valid] = useState<boolean>(false)
    const { formRef, save, isSaving } = useSaveForm(user.id, saveHandler)
    useEffect(() => setSubmitEnabled(form1Valid && form2Valid), [form1Valid, form2Valid])
    const { username, gender, profile_url } = user
    let customFieldProps: FieldUpdate[] = []
    if (!isBrandOrArist) {
        customFieldProps = [[FIELDS.displayName, { optional: true }]]
    }

    const dimButton = !submitEnabled || isSaving
    return (
        <form
            className={className}
            ref={formRef}
            onSubmit={e => {
                e.stopPropagation()
                e.preventDefault()
            }}
        >
            <FormContainer>
                <Header>Account Settings</Header>
                {isBrandOrArist ? (
                    <ChannelContainer>
                        <Label label="Username" />
                        <ArtistBrandUsername>
                            <Username>{`@${username}`}</Username>
                            <Channel>{profile_url}</Channel>
                        </ArtistBrandUsername>
                    </ChannelContainer>
                ) : (
                    <Fragment>
                        <Fields
                            user={user}
                            onValidChange={setForm1Valid}
                            showFields={[FIELDS.username]}
                            showLabel
                            noTooltip
                            ackResponseError={ackResponseError}
                            responseErrors={responseErrors}
                            aggroErrorMessages={true}
                        />
                        <FooterTip>
                            <Channel>{profile_url}</Channel>
                        </FooterTip>
                    </Fragment>
                )}
                <FieldSection
                    user={user}
                    onValidChange={setForm2Valid}
                    showLabel
                    noTooltip
                    noOptional
                    showFields={
                        isBrandOrArist
                            ? [FIELDS.displayName, FIELDS.email, FIELDS.contact, FIELDS.birthdate]
                            : [FIELDS.displayName, FIELDS.email, FIELDS.birthdate]
                    }
                    customFieldProps={customFieldProps}
                    ackResponseError={ackResponseError}
                    responseErrors={responseErrors}
                    aggroErrorMessages={true}
                />
                <ButtonGroups>
                    <Label label="Gender" />
                    <GenderButtons defaultSelectedValue={gender} />
                </ButtonGroups>
                <BlockEnterSubmit />
                <CTAButton onClick={save} color={dimButton ? colors.giphyDarkGrey : colors.primaryCTA}>
                    {isSaving ? `Saving...` : `Save`}
                </CTAButton>
            </FormContainer>
        </form>
    )
}

export default SettingsForm
