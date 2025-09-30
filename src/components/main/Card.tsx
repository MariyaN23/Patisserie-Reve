type Props = {
    title: string
    subtitle: string
    description: string
    image: string
}

export const Card = ({title, subtitle, description, image}: Props) => {
    return (
        <div className={'w-52 h-36 rounded-3xl mr-8 bg-cover'}
             style={{ backgroundImage: `url(${image})` }}
        >
            <div className={'h-full w-full flex flex-col items-center justify-center card'}>
                <p className={'text-3xl font-bold'}>{title}</p>
                <p className={'font-semibold text-petal-pink dark:text-coral'}>{subtitle}</p>
                <p className={'font-semibold text-petal-pink dark:text-coral'}>{description}</p>
            </div>
        </div>
    )
}