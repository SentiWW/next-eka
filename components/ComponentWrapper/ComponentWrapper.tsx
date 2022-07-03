import style from './ComponentWrapper.module.css';

interface ComponentWrapperProps {
    children?: any
}

const ComponentWrapper : React.FC<ComponentWrapperProps> = ({children}) => {
    return (
        <article className={style.article}>
            {children}
        </article>
    );
};

export default ComponentWrapper;