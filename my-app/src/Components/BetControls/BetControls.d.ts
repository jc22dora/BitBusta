/// <reference types="react" />
import './BetControls.css';
export interface BetControlsProps {
    sendBet: (bet: number) => Promise<void>;
}
declare function BetControls(props: BetControlsProps): JSX.Element;
export default BetControls;
