import loadingGif from '~/assets/images/loading.gif';

interface IProps {
    isLoading: boolean,
}

export default function Loading({ isLoading }: IProps) {
    return (
        <>
            {isLoading &&
                <div className="loading">
                    <div className="loading--overlay"></div>

                    <div className="loading--spinner-container">
                        <img className='loading--spinner-container--gif' src={loadingGif} alt='loading' />
                    </div>
                </div>
            }
        </>
    )
}