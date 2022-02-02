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
                        <div className="loading--spinner-container--spinner"></div>
                    </div>
                </div>
            }
        </>
    )
}