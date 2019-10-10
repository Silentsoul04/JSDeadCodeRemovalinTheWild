import { colors } from '@giphy/react-giphy-brand'
import { IStory } from 'shared/types/story'

const defaultStory: IStory = {
    story_id: '',
    title: '',
    description: '',
    gifs: [],
    tags: [],
    cover_gif: null,
    is_private: true,
    color: colors.giphyPurple,
    slug: '',
    create_datetime: '',
    publish_datetime: new Date().toISOString(),
    secondary_color: colors.giphyIndigo,
    category: '',
    url: '',
}

export default defaultStory
