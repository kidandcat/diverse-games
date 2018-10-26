import Avatar from '../components/Avatar'

const s = {
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    name: {
        textAlign: "center",
        color: "black",
        fontSize: "3em",
        marginTop: 20,
        marginBottom: 10
    },
    desc: {
        color: "black",
        textAlign: "center",
        maxWidth: '20vw',
        fontSize: '1.5em'
    }
}

export default ({ name, description, avatar }) => {
    return (
        <div style={s.container}>
            <Avatar image={avatar} />
            <h3 style={s.name}>{name}</h3>
            <p style={s.desc}>{description}</p>
        </div>
    )
}