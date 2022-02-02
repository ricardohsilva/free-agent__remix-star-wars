interface IProps {
    image: string,
    title: string,
    titleColor: 'black' | 'white';
    backgroundSize: 'cover' | 'contain';
    backgroundPosition?: 'top' | 'bottom' | 'left' | 'right' | 'center'
    backgroundColor?: string
}

export default function Cover({ image, title, titleColor, backgroundSize, backgroundPosition, backgroundColor }: IProps) {
    return (
        <div className='cover'>
            <div className='responsive-container'>
                <h1 style={{ color: titleColor }} className='cover--title'>{title}</h1>
            </div>
            <div className='cover--image'
                style={
                    {
                        backgroundImage: `url(${image})`,
                        backgroundSize: backgroundSize,
                        backgroundPosition: backgroundPosition ? backgroundPosition : 'top',
                        backgroundColor: backgroundColor
                    }
                }></div>
        </div>
    )
}