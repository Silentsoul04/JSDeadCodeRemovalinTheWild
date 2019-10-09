import { colors } from '@giphy/react-giphy-brand'
import appendQuery from 'append-query'
import React, { Fragment, useEffect, useState } from 'react'
import Fields, { FIELDS, FieldUpdate, Label } from 'shared/components/form/fields'
import BlockEnterSubmit from 'shared/components/form/inputs/block-enter-submit'
import styled from 'styled-components'
import { SaveHandler, AckResponseErrorHandler, useSaveForm } from '../../settings'
import { ButtonGroup, ButtonGroups, CTAButton, FooterTip, FormContainer, Header, Textarea, FieldSection } from './sc'
import { IProfilePowerUser } from 'shared/types/user'

const publicPrivateButtons = [{ label: 'Public', val: true }, { label: 'Private', val: false }]
const yesIsFalseNoIsTrue = [{ label: 'Yes', val: false }, { label: 'No', val: true }]

type Props = {
    csrftoken?: string
    user: IProfilePowerUser
    className?: string
    saveHandler: SaveHandler
    ackResponseError: AckResponseErrorHandler
    responseErrors: object
}

const aboutInputProps = {
    as: 'textarea',
    name: 'about_bio',
    placeholder:
        'Enter a short description about yourself. This could be your tagline, slogan, or anything else you like!',
}

const ButtonGroupsWithFooter = styled(ButtonGroups)`
    margin-bottom: 0;
`

const EmbedContainer = styled.div`
    width: 100%;
    iframe {
        width: 100%;
        height: 432px;
        margin-bottom: 8px;
        background: black;
    }
`

// use ' ' for blank labels
const socialLabels: FieldUpdate[] = [
    [FIELDS.facebook, { label: 'Social Links' }],
    ...[FIELDS.tumblr, FIELDS.twitter, FIELDS.instagram].map((key: string): FieldUpdate => [key, { label: ' ' }]),
]

const ChannelSettingsForm = ({ csrftoken, user, className, saveHandler, ackResponseError, responseErrors }: Props) => {
    const [submitEnabled, setSubmitEnabled] = useState<boolean>(false)
    const [form1Valid, setForm1Valid] = useState<boolean>(false)
    const [form2Valid, setForm2Valid] = useState<boolean>(false)
    const { formRef, save, isSaving, formSaveId } = useSaveForm(user.id, saveHandler)
    useEffect(() => setSubmitEnabled(form1Valid && form2Valid), [form1Valid, form2Valid])

    const { user_type } = user
    const isBrandOrArist = user_type === 'partner' || user_type === 'artist'
    const { is_public, display_view_counts, about_bio } = user
    const { block_external_indexing, attribution_gif, suppress_chrome } = user
    let embedUrl
    if (attribution_gif) {
        embedUrl = attribution_gif.embed_url
    }
    let customFieldProps: FieldUpdate[] = []
    if (!isBrandOrArist) {
        customFieldProps = [[FIELDS.primarySite, { optional: true }]]
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
                {csrftoken && <input type="hidden" name="csrfmiddlewaretoken" value={csrftoken} />}
                <Header>Channel Settings</Header>
                <ButtonGroups>
                    <Label label="Channel Privacy" />
                    <ButtonGroup
                        groupName="is_public"
                        buttons={publicPrivateButtons}
                        defaultSelectedValue={is_public}
                    />
                </ButtonGroups>
                <ButtonGroups>
                    <Label label="About" />
                    <Textarea inputProps={aboutInputProps} initialValue={about_bio} />
                </ButtonGroups>
                <Fields
                    user={user}
                    onValidChange={setForm1Valid}
                    showFields={[FIELDS.primarySite]}
                    showLabel
                    noTooltip
                    noOptional
                    customFieldProps={customFieldProps}
                    ackResponseError={ackResponseError}
                    responseErrors={responseErrors}
                    aggroErrorMessages={true}
                />
                <FieldSection
                    user={user}
                    onValidChange={setForm2Valid}
                    showFields={[FIELDS.facebook, FIELDS.tumblr, FIELDS.twitter, FIELDS.instagram]}
                    showLabel
                    noTooltip
                    noOptional
                    customFieldProps={socialLabels}
                    ackResponseError={ackResponseError}
                    responseErrors={responseErrors}
                    aggroErrorMessages={true}
                />
                {isBrandOrArist && (
                    <Fragment>
                        <ButtonGroupsWithFooter>
                            <Label label="Display GIF View Count" />
                            <ButtonGroup
                                groupName="display_view_counts"
                                buttons={publicPrivateButtons}
                                defaultSelectedValue={display_view_counts}
                            />
                        </ButtonGroupsWithFooter>
                        <FooterTip>Your GIF View Counts are private. Only you can see them.</FooterTip>
                        <ButtonGroups>
                            <Label label="Find Me in Google" />
                            <ButtonGroup
                                groupName="block_external_indexing"
                                buttons={yesIsFalseNoIsTrue}
                                defaultSelectedValue={block_external_indexing}
                            />
                        </ButtonGroups>
                        <ButtonGroups>
                            <Label label="Embed Attribution" />
                            <EmbedContainer>
                                {embedUrl && <iframe src={appendQuery(embedUrl, { formSaveId })} />}
                                <ButtonGroup
                                    groupName="suppress_chrome"
                                    buttons={yesIsFalseNoIsTrue}
                                    defaultSelectedValue={suppress_chrome}
                                />
                            </EmbedContainer>
                        </ButtonGroups>
                    </Fragment>
                )}
                <BlockEnterSubmit />
                <CTAButton onClick={save} color={dimButton ? colors.giphyDarkGrey : colors.primaryCTA}>
                    {isSaving ? `Saving...` : `Save`}
                </CTAButton>
            </FormContainer>
        </form>
    )
}

export default ChannelSettingsForm
