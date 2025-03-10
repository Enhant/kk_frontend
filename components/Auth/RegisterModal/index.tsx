import Modal from '@mui/material/Modal';
import Grid from '@mui/material/Grid';
import TextInput from 'common/TextInput';
import ButtonInput from 'common/ButtonInput';
import Rules from 'common/Rules';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    modal: {
        borderRadius: 10,
        outline: 'none',
        boxSizing: `border-box`,
        padding: 20,
        maxWidth: 450,
        height: 400,
        margin: '150px auto',
        backgroundColor: 'rgb(58, 0, 136)'
    },
    modalHeader: {
        textAlign: 'center',
        padding: '20px 0 15px',
        fontSize: 25,
        color: 'white',
        fontWeight: 800,
        textTransform: 'uppercase',
        fontFamily: 'sans-serif'
    }
})

const RegisterModal: React.FC<{ open: boolean, handleModalClose: () => void }> = ({open, handleModalClose}) => {
    const classes = useStyles();

    return (
            <Modal
                open={open}
                onClose={handleModalClose}
                aria-labelledby="login-modal"
                aria-describedby="login-modal-description"
            >
                <Grid 
                    className={classes.modal} 
                    container 
                    justifyContent="center"
                    alignItems="flex-start"
                >
                    <div className={ classes.modalHeader }>Логин</div>
                    <TextInput label="Имя пользователя" onChange={undefined}/>
                    <TextInput label="Пароль" onChange={undefined} />
                    <TextInput label="Повторить пароль" onChange={undefined}/>
                    <ButtonInput label="Зарегистрироваться" onClick={undefined}/>
                    <Rules/>
                </Grid>
            </Modal>
    );
}

export default RegisterModal
