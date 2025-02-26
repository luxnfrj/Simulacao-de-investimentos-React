import { calculateInvestmentResults, formatter } from '../util/investment';

export default function Results({ input }) {
    const resultsData = calculateInvestmentResults(input);

    // Cálculo do investimento inicial (fixo)
    const initialInvestment = resultsData[0].valueEndOfYear - resultsData[0].interest - resultsData[0].annualInvestment;

    return (
        <table id="result">
            <thead>
                <tr>
                    <th>Ano</th>
                    <th>Valor Investido</th>
                    <th>Juros (Ano)</th>
                    <th>Juros Totais</th>
                    <th>Capital Investido</th>
                </tr>
            </thead>

            <tbody>
                {resultsData.map((yearData) => {
                    // Cálculo dos juros totais acumulados até o ano
                    const totalInterest = yearData.valueEndOfYear - (yearData.annualInvestment * yearData.year) - initialInvestment;

                    // Cálculo do valor total investido até o ano
                    const totalAmountInvested = yearData.annualInvestment * yearData.year + initialInvestment;

                    return (
                        <tr key={yearData.year}>
                            <td>{yearData.year}</td>
                            <td>{formatter.format(yearData.valueEndOfYear)}</td>
                            <td>{formatter.format(yearData.interest)}</td>
                            <td>{formatter.format(totalInterest)}</td>
                            <td>{formatter.format(totalAmountInvested)}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}
