 
import React, { useState, useEffect, useContext } from 'react';

import { FilterMatchMode } from 'primereact/api';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { MultiSelect } from 'primereact/multiselect';
import { Tag } from 'primereact/tag';
import { color } from '../../../globalStyle';
import { Calendar } from 'primereact/calendar';
import { Button } from 'primereact/button';
import { classNames } from 'primereact/utils';
import {AiOutlineCloseSquare} from 'react-icons/ai'
import { InputNumber } from 'primereact/inputnumber';

import { TriStateCheckbox } from 'primereact/tristatecheckbox';
import { ModalTotalContext } from '../../../contexts/ModalContext';


export default function SalesTable({setClickedId,setFilteredData,sales,transactions,operators,salesBox}) {
   
        const [myState, setMyState] = useState(localStorage.getItem('lock') ? JSON.parse(localStorage.getItem('lock')) : true );
        const {setOpenModal} = useContext(ModalTotalContext)
        const handleCancel = (id) => {
                setOpenModal("deleteSale")
                setClickedId(id)
        }

        useEffect(() => {

            const handleStorageChange = (event) => {
                setMyState(old => !old);
            };
        
            window.addEventListener("storage", handleStorageChange);
        
            return () => {
              window.removeEventListener("storage", handleStorageChange);
            };
          }, [myState]);
    
    
    const formatCurrency = (value) => {
        return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    };

    const [globalFilterValue, setGlobalFilterValue] = useState('');
    const [customers, setCustomers] = useState(null);
    const [filters, setFilters] = useState({
        date: {
          value: new Date(),
          matchMode: FilterMatchMode.DATE_IS
        },
      });
    const init = () => {setFilters({
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
        id: { value: null, matchMode: FilterMatchMode.CONTAINS },
        operador: { value: null, matchMode: FilterMatchMode.IN },
        categoria: { value: null, matchMode: FilterMatchMode.IN },
        caixa: { value: null, matchMode: FilterMatchMode.IN },
        date: { value: null, matchMode: FilterMatchMode.DATE_IS },
        total: { value: null, matchMode: FilterMatchMode.EQUALS },
        method: { value: null, matchMode: FilterMatchMode.IN },
        verified: { value: null, matchMode: FilterMatchMode.EQUALS }
     })
     setGlobalFilterValue('');}

   
    const [operatorsColumns] = useState(operators.map(operator => operator.nome));
    const [salesBoxColuns] = useState(salesBox.map(sB => (sB.nome)));
    const [categories] = useState(['Venda','Sangria','Reforço','Abertura de caixa'])

       

    const [methodsColumns] = useState(["Dinheiro"]);
    const getById = (objects,id) => {
        if (!objects) return []
        
        const filtered = objects.filter(item => item.id === id);
        try{
       return(filtered[0].nome)}
       catch(e){
        return "Excluído"
       }
      }
   

    useEffect(() => {
        
        const salesData = sales.map((item) => {
            return ({
            id: item.id,
            date: item.data,
            caixa:getById(salesBox,item.id_caixa),
            methods:item.methods.map((method) => method.nome ),
            operador:getById(operators,item.id_operador),
            total: item.itens.map(i => parseFloat(i.valor)*i.quantidade).reduce((a,b) => a+b,0),
            categoria:"Venda",
            verified: item.comNota ? true : false})
         
    })
   
    
    const transactionsData = transactions.map((item) => {
        return ({
        id: item.id,
        date: item.data,
       
        methods:["Dinheiro"],
        operador:getById(operators,item.id_operador),
        caixa:[getById(salesBox,item.id_caixa)],
        total:item.valor,
        categoria:item.tipo,
        verified: true})
     
})
    
    const data = salesData.concat(transactionsData);
    setCustomers(getCustomers(data));
    const compareDate = (date2) => {
        const timeDate1 = new Date(new Date().toDateString()).getTime(); //SEM HORAS
        const timeDate2 = new Date(date2.toDateString()).getTime(); //SEM HORAS
        return timeDate1 === timeDate2
    }

    const filter  = getCustomers(data).filter( sale => compareDate(sale.date) )
    setFilteredData(filter)
    console.log(filter)
   
    }, 

    []);

    

    const getCustomers = (data) => {
        return [...(data || [])].map((d) => {
            d.date = new Date(d.date);

            return d;
        });
    };

    const onGlobalFilterChange = (e) => {
        const value = e.target.value;
        let _filters = { ...filters };
        _filters['global'].value = value;
        setFilters(_filters);
        setGlobalFilterValue(value);
    
    };

    const clearFilter = () => {
       init()
    };
    const renderHeader = () => {
        return (
            <div className="flex justify-content-between" style={{display:'flex',justifyContent:'space-between'}}>
                <Button size="small" type="button" icon="pi pi-filter-slash" label="Limpar" outlined onClick={clearFilter} />
                <span className="p-input-icon-left" >
                    <i className="pi pi-search " />
                    <InputText value={globalFilterValue} onChange={onGlobalFilterChange} placeholder="Pesquisar" />
                </span>
            </div>
        );
    };

   
    const SaleBoxBodyTemplate = (rowData) => {
        

        return (
            <div className="flex align-items-center gap-2">   
                <span>{rowData.caixa}</span>
            </div>
        );
     }


  
     const MethodsBodyTemplate = (rowData) => {
        

        return (
            <div className="flex align-items-center gap">
               
            {(rowData.methods).map(form => {
                return(
                <Tag value={form} style={{backgroundColor:rowData.categoria ==="Sangria" ? color.cancel : color.brand}} />)
            })}
        
            </div>
        );
     }

    const operadorBodyTemplate = (rowData) => {
        const operador = rowData.operador;
        return (
            <div className="flex align-items-center gap-2">
               
                <span>{operador}</span>
            </div>
        );
    };

    const categoriaBodyTemplate = (rowData) => {
        const categoria = rowData.categoria;
        return (
            <div className="flex align-items-center gap-2">
                <span>{categoria}</span>
            </div>
        );
    };


    const operadorsItemTemplate = (option) => {
        return (
            <div className="flex align-items-center gap-2">
                <span>{option}</span>
            </div>
        );
    };

  
    const operadorRowFilterTemplate = (options) => {
        return (
            <MultiSelect
               
                value={options.value}
                options={operatorsColumns}
                itemTemplate={operadorsItemTemplate}
                onChange={(e) => options.filterApplyCallback(e.value)}
                className="p-column-filter"
                maxSelectedLabels={1}
                selectedItemsLabel={`${options.value ? options.value.length : 0} itens selecionados`}
             

            />
        );
    };

    const categoriaItemTemplate = (option) => {
        return (
            <div className="flex align-items-center gap-2">
                <span>{option}</span>
            </div>
        );
    };

  
    const categoriaRowFilterTemplate = (options) => {
        return (
            <MultiSelect   
                value={options.value}
                options={categories}
                itemTemplate={categoriaItemTemplate}
                onChange={(e) => options.filterApplyCallback(e.value)}
                className="p-column-filter"
                maxSelectedLabels={1}
                selectedItemsLabel={`${options.value ? options.value.length : 0} itens selecionados`}
     

            />
        );
    };

    const verifiedBodyTemplate = (rowData) => {
        return <i style={rowData.verified ? {color:`${color.brand}`} : {color:`#D3384B`}} className={classNames('pi', { 'true-icon pi-check-circle ': rowData.verified, 'false-icon pi-times-circle': !rowData.verified })}></i>;
    };

    const verifiedRowFilterTemplate = (options) => {
        return <TriStateCheckbox value={options.value} onChange={(e) => options.filterApplyCallback(e.value)} />;
    };

    const SaleBoxeRowFilterTemplate = (options) => {
        
        return (
            <MultiSelect
                value={options.value}
                options={salesBoxColuns}
                itemTemplate={operadorsItemTemplate}
                onChange={(e) => options.filterApplyCallback(e.value)}
                className="p-column-filter"
                maxSelectedLabels={1}
                selectedItemsLabel={`${options.value ? options.value.length : 0} itens selecionados`}
               
            />
        );
    };
    
    const methodsItemTemplate = (option) => {
        return (
            <div className="flex align-items-center gap-2">
               
                <span>{option}</span>
            </div>
        );
    };


    
    const MethodsRowFilterTemplate = (options) => {
        return (
            <MultiSelect
                value={options.value}
                options={methodsColumns}
                itemTemplate={methodsItemTemplate}
                onChange={(e) => options.filterApplyCallback(e.value)}
                className="p-column-filter"
                maxSelectedLabels={1}
                selectedItemsLabel={`${options.value ? options.value.length : 0} itens selecionados`}
               
               
            />
        );
    };

    const formatDate = (value) => {
        return value.toLocaleDateString('pt-BR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        });
    };
    const dateBodyTemplate = (rowData) => {
        return formatDate(rowData.date);
    };

    const dateFilterTemplate = (options) => {
    
        return <Calendar value={options.value} onChange={(e) => options.filterApplyCallback(e.value)} dateFormat="dd/mm/yy" placeholder="dd/mm/yyyy" mask="99/99/9999" />;
    };
    

    const totalBodyTemplate = (rowData) => {
        return  <span> {formatCurrency(rowData.total)}</span>
    };

    const totalFilterTemplate = (options) => {
        return <InputNumber value={options.value} onChange={(e) => options.filterApplyCallback(e.value)} mode="currency" currency="BRL" locale="pt-BR" />;
    };
    const actionBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                {rowData.categoria === "Venda" &&
                <button onClick={()=>handleCancel(rowData.id)}><AiOutlineCloseSquare color={color.cancel}/></button>}
                
            </React.Fragment>
        );
    };
    const header = renderHeader();

    return (
     
           
            <DataTable value={customers} onValueChange={filteredData => setFilteredData(filteredData) } resizableColumns='fit' size='small'  paginator rows={10} dataKey="id" filters={filters}
                    globalFilterFields={['id','name', 'operador','method', 'total','status','date','verified']} header={header} emptyMessage="Vazio">
                 <Column style={{width:'10%'}} sortable  field="id"  header="N " filter filterPlaceholder="ID"  />
                 <Column  style={{width:'10%'}} header="Data de venda" sortable sortField='date' filterField="date" dataType="date"  body={dateBodyTemplate} filter filterElement={dateFilterTemplate} />
                <Column  style={{width:'20%'}} header="Caixa" filterField="caixa" 
               
                    body={SaleBoxBodyTemplate} filter filterElement={SaleBoxeRowFilterTemplate}
                    showFilterMenuOptions={false} showAddButton={false} showFilterMatchModes={false} filterMatchMode={'in'}/>

                
                <Column header="Operador"  style={{width:'20%'}} filterField="operador"
                    body={operadorBodyTemplate} filter filterElement={operadorRowFilterTemplate} showFilterMenuOptions={false} showAddButton={false} showFilterMatchModes={false} filterMatchMode={'in'}/>

            <Column header="Categoria"  style={{width:'20%'}} filterField="categoria"
                    body={categoriaBodyTemplate} filter filterElement={categoriaRowFilterTemplate} showFilterMenuOptions={false} showAddButton={false} showFilterMatchModes={false} filterMatchMode={'in'}/>

                <Column  style={{width:'20%'}} header="Formas de pagamento" filterField="method" 
                    body={MethodsBodyTemplate} filter filterElement={MethodsRowFilterTemplate}
                    showFilterMenuOptions={false} showAddButton={false} showFilterMatchModes={false} filterMatchMode={'in'}
                     />
                 <Column header="Valor total"  style={{width:'15%'}} sortable sortField='total' filterField="total" dataType="numeric"  body={totalBodyTemplate} filter filterElement={totalFilterTemplate}/>
                 {myState &&
                 <Column field="verified"  style={{width:'2.5%'}} header="Nota fiscal" dataType="boolean"  body={verifiedBodyTemplate} filter filterElement={verifiedRowFilterTemplate} showFilterMenuOptions={false}  showAddButton={false} showFilterMatchModes={false} filterMatchMode={'equals'} />}
                 <Column body={actionBodyTemplate} exportable={false} style={{width:'2.5%'}}></Column>
            </DataTable>
      
    );
}
        