
import {Hover, Blockquote} from "./hoverComponent.styles.js";

const HoverComponent = () => {
        return (
            <Hover className={"hover"}>
                <Blockquote className={"quote"}>
                    {" "}
                    Olivia, Maria, Francisco{" "}
                </Blockquote>
            </Hover>
        );
    
};

export default HoverComponent;
