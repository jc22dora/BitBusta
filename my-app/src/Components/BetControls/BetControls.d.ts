/// <reference types="react" />
export interface BetControlsProps {
    sendBet: (bet: number) => Promise<void>;
}
declare function BetControls(props: BetControlsProps): JSX.Element;
export default BetControls;
