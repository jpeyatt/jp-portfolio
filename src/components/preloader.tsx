import { FunctionComponent } from "react";
import '../styles/preloader.css';
import { ReactComponent as PreloaderSVG } from '../assets/images/preloader.svg';

const PreLoader: FunctionComponent = () => {

    return (
        <div className="preloader">
            <PreloaderSVG />
        </div>
    );
};

export default PreLoader;