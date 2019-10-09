import css from './stick-around-ad.css'

const defaultAdProps = {
    title: 'Stick Around',
    link: '/about/stickers',
    description: 'GIPHY is more than just GIFs and a pretty smile. Learn how to share stickers!',
    img: { src: '/static/img/about/thumb-stick-around.gif', width: 210, height: 112 },
    overlay: true,
    buttonCopy: 'Watch video',
}

const StickAroundAd = ({ withBorder, adProps = defaultAdProps }) => (
    <div className={withBorder ? css.dividerContainer : css.container}>
        <a href={adProps.link} style={{ fontWeight: 600 }}>
            <h4 className={css.subTitle}>{adProps.title}</h4>
            <div className={css.video}>
                <img src={adProps.img.src} width={adProps.img.width} height={adProps.img.height} />
                {adProps.overlay && (
                    <div className={css.overlay}>
                        <i className={css.play} />
                    </div>
                )}
            </div>
            <p className={css.description}>{adProps.description}</p>
            <div className={css.button}>{adProps.buttonCopy}</div>
        </a>
    </div>
)

export default StickAroundAd
