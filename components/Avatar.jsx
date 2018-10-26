import { styleAvatar } from '../styles'

const s = {
    container: {
        ...styleAvatar(25),
        margin: 15
    },
    image: {
        width: "100%"
    }
}

export default ({ image }) => {
    return (
        <div style={s.container}>
            <img src={image} style={s.image} />
        </div>
    )
}