import { createContext } from 'react';

const financeContext = createContext({
    income: [],
    addIncomeItem: async () => { },
    removeIncomeItem: async () => { },


});

export default function FinanceContextProvider({ children }) {
    const [income, setIncome] = useState([]);

    const addIncomeItem = async () => { };
    const removeIncomeItem = async () => { };

    const values = { income, addIncomeItem, removeIncomeItem }

    return <financeContext.Provider
        value={values}>
        {children}
    </financeContext.Provider>
}

