import style from './ComponentWrapper.module.css';

interface ComponentWrapperProps {
    children?: any
    id?: string
}

const ComponentWrapper : React.FC<ComponentWrapperProps> = ({children, id}) => {
    return (
        <article id={id} className={style.article}>
            {children}
        </article>
    );
};

export default ComponentWrapper;