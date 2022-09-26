/// <reference types="react" />
import './BetControls.css';
export interface BetControlsProps {
    sendBet: (bet: number) => any;
    betButtonMessage: string;
    betAbility: boolean;
    setBetAbility: any;
}
declare function BetControls(props: BetControlsProps): JSX.Element;
export default BetControls;
