import React from 'react';
import { TreeGridComponent , ColumnDirective 
  ,Inject
  ,Page
  ,ColumnsDirective
  ,Sort
  ,Filter
} from '@syncfusion/ej2-react-treegrid';
import { summaryData } from '../dataSource';



const TestTreeGrid = () => {
  return (
    <TreeGridComponent 
    dataSource={summaryData} 
    childMapping='subtask'
    treeColumnIndex={1}
    allowPaging={true}
    allowSorting={true}
    allowFiltering={true}

     >
      <Inject services={[Page , Sort , Filter]}/>
    <ColumnDirective field='ID' headerText='ID' width="90" textAlign='right'></ColumnDirective>
    <ColumnDirective field='Names' headerText='Names'></ColumnDirective>
    <ColumnDirective field='Category' headerText='Category'></ColumnDirective>
    <ColumnDirective field='Units' headerText='Units'></ColumnDirective>
    <ColumnDirective field='UnitPrice' headerText='UnitPrice'></ColumnDirective>
    <ColumnDirective field='Price' headerText='Price' format="c2"></ColumnDirective>
    </TreeGridComponent>
  )
}

export default TestTreeGrid
