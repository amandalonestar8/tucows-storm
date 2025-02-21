import { render } from "vue";

export default [
    {
        label: "ID",
        key: "id" ,
    },
    {
        label: "Status",
        key: "status" ,
        render(row) {
            let bgClass = "bg-purple";
            let textClass = "text-purple";
            let statusMessage = "Status";

            if (row.quantity < 20) {
                bgClass = "bg-red";    
                textClass = "text-red";
                statusMessage = "Few left"
            } else if (row.quantity < 100) {
                bgClass = "bg-yellow";   
                textClass = "text-yellow";
                statusMessage = "Low stock"
            } else {
                bgClass = "bg-green";    
                textClass = "text-green";
                statusMessage = "In stock"
            }
            return `<span class="${bgClass} ${textClass} px6 py1 rounded">
              ${statusMessage}
            </span>`; 
          },
    },
    {
        label: "Quantity",
        key: "quantity",
        sortable: true,
    },
    {
        label: "Product name",
        key: "product",
        sortable: true,
        render(row){
            return `<div class="text-left">
            <div>${row.product}</div>
                <small class="text-grey">${row.serial} <span class="hide sm-show">- Qty: ${row.quantity}</span></small>
            </div>`;
        },
    },
    {
        label: "Prices",
        key: "total",
        sortable: true,
        render(row){
            return `$${row.total}`
        },
    }
]