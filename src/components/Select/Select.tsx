import { FlexColumnContainer } from '../styles';
import { SelectWrapper, Option } from './Select.styles';

interface SelectProps {
  options: Array<string>;
  value: string;
  onChange: (selectedOption: string) => void;
}

export const Select = ({ options, value, onChange }: SelectProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (event.target.value !== '') {
      onChange(event.target.value);
    }
  };

  return (
    <FlexColumnContainer gap={5}>
      <label htmlFor="select">Option select</label>
      <SelectWrapper name="select" value={value} onChange={handleChange}>
        <Option value="">Select an option</Option>
        {options.map((option, index) => (
          <Option key={index} value={option}>
            {option}
          </Option>
        ))}
      </SelectWrapper>
    </FlexColumnContainer>
  );
};
