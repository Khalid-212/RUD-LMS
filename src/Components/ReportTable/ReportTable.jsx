import React from 'react'
import "./ReportTable.css"

function ReportTable({title,property}) {
    const [percentageColor, setpercentageColor] = React.useState("green")
    const total =property.filter(el => el === "0 days").length + property.filter(el => el === "1-2 days").length + property.filter(el => el === "3-4 days").length + property.filter(el => el === "5-6 days").length + property.filter(el => el === "7 days").length
    // function percentage(percent, total) {
    //     return ((percent/ 100) * total)
    // }
    function percentageCalculator(numA, numB) {
        return (numA / numB) * 100;
      }
      const totalPercentage = percentageCalculator(total,property.length)
      const sevenDays = property.filter(el => el === "7 days").length * 100
      const sixDays = property.filter(el => el === "5-6 days").length * 80
      const fourDays = property.filter(el => el === "3-4 days").length * 60
      const twoDays = property.filter(el => el === "1-2 days").length * 40
      const zeroDays = property.filter(el => el === "0 days").length * 0
        const totalScore = (sevenDays + sixDays + fourDays + twoDays + zeroDays) / 100
  return (
    <div className="reportTable">
              <div className='tableTitle'>{title} </div>
        <div className='tableItem'>
            <div className='days'>
        0 days:
            </div>
            <div className='amount'>
        {property.filter(el => el === "0 days").length}
            </div>
            <div className='percentage'>
        {percentageCalculator(property.filter(el => el === "0 days").length,total).toFixed(2)}%
            </div>
        </div>
        <div className='tableItem'>
        <div className='days'>
        1-2 days:
            </div>
            <div className='amount'>
        {property.filter(el => el === "1-2 days").length}
        </div>
        <div className='percentage'>
        {percentageCalculator(property.filter(el => el === "1-2 days").length,total).toFixed(2)}%
        </div>
        </div>
        <div className='tableItem'>
        <div className='days'>
        3-4 days:
            </div>
            <div className='amount'>
        {property.filter(el => el === "3-4 days").length}
        </div>
        <div className='percentage'>
        {percentageCalculator(property.filter(el => el === "3-4 days").length,total).toFixed(2)}%
        </div>
        </div>
        <div className='tableItem'>
        <div className='days'>
        5-6 days:
            </div>
            <div className='amount'>
        {property.filter(el => el === "5-6 days").length}
        </div>
        <div className='percentage'>
        {percentageCalculator(property.filter(el => el === "5-6 days").length,total).toFixed(2)}%
        </div>
        </div>
        <div className='tableItem'>
        <div className='days'>
        7 days:
            </div>
            <div className='amount'>
        {property.filter(el => el === "7 days").length}
        </div>
        <div className="percentage">
        {percentageCalculator(property.filter(el => el === "7 days").length,total).toFixed(2)}%
        </div>
        </div>
        <div>
            total: {totalScore.toFixed(2)}%
        </div>
    </div>
  )
}

export default ReportTable