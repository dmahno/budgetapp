import {observer} from 'mobx-react-lite';
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Label,
  Legend,
} from 'recharts';

import {financeStore} from '../../model/store/FinanceStore';
import {categories} from '../../model/constants/categories';

export const ChartHistory = observer(() => {
  // Map category colors
  const COLORS = categories.reduce(
    (acc, category) => {
      acc[category.value] = category.color;
      return acc;
    },
    {} as Record<string, string>,
  );

  // Prepare data for chart
  const data = categories
    .map((category) => {
      const totalAmount = financeStore.filteredOperations
        .filter((op) => op.category === category.value)
        .reduce(
          (sum, op) => sum + (op.type === 'add' ? op.amount : -op.amount),
          0,
        );

      return {
        name: category.label,
        value: totalAmount,
        color: COLORS[category.value],
        key: category.value,
      };
    })
    .filter((entry) => entry.value !== 0); // Remove zero-value categories

  // Calculate total sum for center display
  const totalSum = data.reduce((acc, item) => acc + item.value, 0);

  const handleCategoryClick = (categoryKey: string) => {
    financeStore.setCategory(categoryKey);
  };

  return (
    <div style={{width: '100%', height: 350}}>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            innerRadius={70}
            outerRadius={90}
            minAngle={5} // Minimum angle for visibility of small slices
            label={({value}) => `${value.toLocaleString('ru-RU')} ₽`}
            labelLine={false}
            onClick={(e) => handleCategoryClick(e.key)}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={entry.color}
                onClick={() => handleCategoryClick(entry.key)}
                cursor="pointer"
              />
            ))}
            {/* Center label for total amount */}
            <Label
              value={`${totalSum.toLocaleString('ru-RU')} ₽`}
              position="center"
              fontSize={18}
              fill="#333"
              textAnchor="middle"
            />
          </Pie>
          <Tooltip
            formatter={(value: number) => `${value.toLocaleString('ru-RU')} ₽`}
          />
          <Legend verticalAlign="bottom" height={36} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
});
