import react from 'react';
import {TextInput,View} from 'react-native';
import firebase from 'firebase';

export default class expense extends Component{

    static addItem() {
        const expenseList=[];
        let expAmt = 0;
        const add_expense_btn = document.getElementById("add-expense-btn");
        const budgetAmount = document.getElementById("budegt-amount");
        const balance = document.getElementById("balance-amount");
        const expenseTitle = document.getElementById("expense-Title");
        const expenseAmount = document.getElementById("expenes-Amount");

        add_expense_btn.addEventListener("click",  ()  => {

            if(
                expenseTitle.Value.trim() === "" ||
                 +expenseTitle.value || 
                 expenseAmount.value ||
                 +expenseAmount.value.trim()=== " " ||
                 +expenseAmount.value < 0
            ) {
                alert("budget Exceeded !!");
            }

        })
    }
}
