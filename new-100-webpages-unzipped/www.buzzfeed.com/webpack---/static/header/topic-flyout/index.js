import {
    h
} from 'preact';
import {
    Link
} from '../link';
import styles from './styles.scss';
import {
    Config
} from '../context';
import {
    UseCaretIcon
} from '../svg/icons/caret';

// Keep these as constants so we only choose the image once per pageload
const IMAGES_PER_GROUP = 6;
const RANDOM_SELECTION = Math.floor(Math.random() * IMAGES_PER_GROUP);

export const TopicFlyout = ({
        title,
        items,
        cta,
        location
    }) => {
        return ( <
            div className = {
                styles.container
            } >
            <
            h3 className = {
                styles.title
            } > {
                title
            } < /h3> <
            div className = {
                styles.items
            } > {
                items.map(item => {
                        const image = Array.isArray(item.img) ? item.img[RANDOM_SELECTION] : item.img;
                        return ( <
                            Link href = {
                                item.url
                            }
                            location = {
                                location
                            }
                            label = {
                                item.label
                            }
                            className = {
                                styles.item
                            } >
                            <
                            figure >
                            <
                            Config.Consumer > {
                                config => < img alt = {
                                    item.title
                                }
                                src = {
                                    `${config.image_service_url}/${image}?output-format=auto&output-quality=auto&downsize=*:80`
                                }
                                /> } <
                                /Config.Consumer>

                                <
                                figcaption > {
                                    item.title
                                } < /figcaption> <
                                /figure> <
                                /Link>
                            );
                        })
                } <
                /div> {
                    cta ?
                        <
                        Link className = {
                            styles.cta
                        }
                    href = {
                        cta.url
                    }
                    location = {
                        location
                    }
                    label = {
                            cta.label
                        } > {
                            cta.title
                        } <
                        UseCaretIcon width = {
                            16
                        }
                    height = {
                        16
                    }
                    aria - hidden = {
                        true
                    }
                    /> <
                    /Link> : ''
                } <
                /div>
            );
        };