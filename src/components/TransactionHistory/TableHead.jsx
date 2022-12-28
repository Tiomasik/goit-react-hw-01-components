import { Head } from './TableHead.styled';

export const TableHead = () => {
    return (
        <thead>
            <Head>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
            </Head>
        </thead>        
    );
};