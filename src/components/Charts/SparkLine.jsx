import React from 'react'
import { SparklineComponent, Inject, SparklineTooltip} from '@syncfusion/ej2-react-charts'

const SparkLine = ({ id, type, color, currentColor, data, height, width}) => {
  return (
    <SparklineComponent
      id={id}
      height={height}
      width={width}
      lineWidth={1}
      valueType='Numeric'
      fill={color}
      border={{ color: currentColor, width: 2}}
      dataSource={data}
      xName='x'
      yName='yval'
      type={type}
      tooltipSettings={{
        visible: true, 
        formt: '${x} : data ${y}',
        trackLineSettings: {
          visible: true,
        }
      }}
    >
      <Inject services={[SparklineTooltip]}/>
    </SparklineComponent>
  )
}

export default SparkLine