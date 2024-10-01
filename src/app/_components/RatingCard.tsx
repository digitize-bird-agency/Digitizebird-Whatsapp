interface RatingCardProps {
    imagePlatform: string;
    imagePlatformAlt: string;
    rating?: number;
    title: string;
}

const RatingCard = ({ imagePlatform, imagePlatformAlt, rating = 5, title }: RatingCardProps) => {

    return (
        <div className='flex flex-col items-center gap-3 w-full'>
            <img
                alt={imagePlatformAlt}
                src={imagePlatform}
                className='h-10 w-auto'
            />

            <div className='flex items-center'>
                {
                    [...Array(rating)].map((item, index) => {
                        return (
                            <img src="/images/star.svg" key={index} alt="rating-star" />
                        )
                    })
                }
            </div>
            <p className="text-sm text-center tracking-tight">Rating based on {rating}/5 on {title}</p>
        </div>
    )
}

export default RatingCard
