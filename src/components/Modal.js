import { useNavigate } from 'react-router-dom'
import style from './Modal.module.css'

export default function Modal({ children }) {
    const navigate = useNavigate()

    function closeHandler() {
        navigate('/')
    }

    return (
        <>
            <div className={style.backdrop} onClick={closeHandler} />
            <dialog open className={style.modal} >{children}</dialog>
        </>
    )
}