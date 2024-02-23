
import cls from "./Counter.module.scss";

export  interface CounterProps {

}

export const Counter = (props: CounterProps) => {
    const {} = props;
    return <div className={cls.Counter}></div>
}

