import Avatar from '../components/Avatar'
import { Paper } from '@material-ui/core'

const s = {
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingLeft: 50,
        paddingRight: 50,
        paddingTop: 20,
        paddingBottom: 20,
        marginTop: 50,
        backgroundColor: 'rgba(255,255,255,0.75)'
    },
    name: {
        textAlign: "center",
        color: 'rgb(0, 196, 189)',
        fontSize: "2em",
        marginTop: 20,
        marginBottom: 10
    },
    desc: {
        color: 'rgb(0, 196, 189)',
        textAlign: "center",
        maxWidth: '30vw',
        fontSize: '1.5em'
    }
}

export default ({ name, description, avatar }) => {
    return (
        <Paper style={s.container}>
            <Avatar image={avatar} />
            <h3 style={s.name}>{name}</h3>
            <p style={s.desc}>{description}</p>
        </Paper>
    )
}