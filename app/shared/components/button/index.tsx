interface IProps {
    label: string,
}

export default function Button({ label }: IProps) {
    return (
        <div className="button">
            <div className="pointer button--inner">
                <p>{label}</p>
            </div>
        </div>
    )
}