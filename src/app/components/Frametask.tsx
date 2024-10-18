import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Frametask.module.css";

export type FrametaskType = {
    className?: string;
    thisIsATask?: string;

    /** Style props */
    propFlex?: CSSProperties["flex"];
    propPadding?: CSSProperties["padding"];
    propMinWidth?: CSSProperties["minWidth"];
    propDisplay?: CSSProperties["display"];
    propMinWidth1?: CSSProperties["minWidth"];
};

const Frametask: FunctionComponent<FrametaskType> = ({
    className = "",
    propFlex,
    propPadding,
    propMinWidth,
    thisIsATask,
    propDisplay,
    propMinWidth1,
}) => {
    const frametaskStyle: CSSProperties = useMemo(() => {
        return {
            flex: propFlex,
            padding: propPadding,
            minWidth: propMinWidth,
        };
    }, [propFlex, propPadding, propMinWidth]);

    const thisIsAStyle: CSSProperties = useMemo(() => {
        return {
            display: propDisplay,
            minWidth: propMinWidth1,
        };
    }, [propDisplay, propMinWidth1]);

    return (
        <div
            className={[styles.frametask, className].join(" ")}
            style={frametaskStyle}
        >
            <input className={styles.btncheckbox} type="checkbox" />
            <div className={styles.thisIsA} style={thisIsAStyle}>
                {thisIsATask}
            </div>
        </div>
    );
};

export default Frametask;
