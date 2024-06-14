import { Checkbox, ConfigProvider, Form, Select } from 'antd';
import React, { useEffect, useState } from 'react';

export interface SelectProps {
  error?: string;
  label?: string;
  options: { value: string; label: string; disabled?: boolean }[];
  mode?: 'multiple' | undefined;
  placeholder: string | undefined;
  size?: 'large' | 'middle' | 'small' | undefined;
  allowClear?: boolean | { clearIcon?: string };
  autoClearSearchValue?: boolean;
  autoFocus?: boolean;
  defaultActiveFirstOption?: boolean;
  defaultOpen?: boolean;
  defaultValue?: string | string[] | null | undefined;
  disabled?: boolean;
  notFoundContent?: string | undefined;
  placement?: 'bottomLeft' | 'bottomRight' | 'topLeft' | 'topRight';
  searchValue?: string | undefined;
  showSearch?: boolean | undefined;
  loading?: boolean;
  onChange?(value: string | string[]): void;
}



const IrmSelect = (props: SelectProps) => {
  const { options = [], mode, onChange, defaultValue, ...restProps } = props;
  const [selectedItems, setSelectedItems] = useState<string[]>(defaultValue as string[] || []);

  const allValues = options.map(option => option.value);
  const selectAllOption = { value: 'select_all', label: 'Select All' };

  // Handle change in selection
  const handleChange = (value: string[]) => {
    if (value.includes(selectAllOption.value)) {
      if (selectedItems.length === allValues.length) {
        setSelectedItems([]);
        onChange && onChange([]);
      } else {
        setSelectedItems(allValues);
        onChange && onChange(allValues);
      }
    } else {
      setSelectedItems(value.filter(item => item !== selectAllOption.value));
      onChange && onChange(value.filter(item => item !== selectAllOption.value));
    }
  };

  // Update selected items when default value changes
  useEffect(() => {
    setSelectedItems(defaultValue as string[] || []);
  }, [defaultValue]);

  // Render options with checkboxes
  const renderOptions = () => {
    return options.map(option => (
      <Select.Option key={option.value} value={option.value} disabled={option.disabled}>
        {mode === 'multiple' && option.value !== selectAllOption.value ? <Checkbox checked={selectedItems.includes(option.value)} style={{ marginRight: 8 }}/> : null}
        {option.label}
      </Select.Option>
    ));
  };

  // Render Select All checkbox
  const renderSelectAllCheckbox = () => {
    return (
      <Select.Option key={selectAllOption.value} value={selectAllOption.value}>
        <Checkbox checked={selectedItems.length === allValues.length} style={{ marginRight: 8 }}/>
        {selectAllOption.label}
      </Select.Option>
    );
  };

  return (
    <ConfigProvider
      theme={{
        components: {
          Checkbox: {
            colorPrimary :  'var(--Black-2, #ABABAB)',
            colorPrimaryBgHover:  'var(--Black-2, #ABABAB)',
            colorPrimaryHover:  'var(--Black-2, #ABABAB)',
            
          },
          Select: {
            optionActiveBg: 'rgba(0, 0, 0, 0.04)',
            optionPadding: '1px 4px 1px 4px',
            optionSelectedBg: '#FFFFFF',
            optionSelectedColor: 'var(--Black-7, #303030)',
            selectorBg: '#FFFFFF',
            controlOutline: '#FFFFFF',
            colorPrimary: 'var(--Black-2, #ABABAB)',
            colorPrimaryHover: 'var(--Black-2, #ABABAB)',
            fontFamily: 'Inter',
          },
        },
      }}
    >
      <Form.Item 
            label={props.label} 
            validateStatus={props.error ? 'error' : 'success'}
            help={props.error}
        >
      <Select
  {...restProps}
  mode={mode}
  value={selectedItems}
  onChange={handleChange}
  filterOption={(input, option) =>
    option && option.label ? option.label.toString().toLowerCase().includes(input.toLowerCase()) : false
  }
  style={{ minWidth:'5%', maxWidth: '20%' }}
>
  {mode === 'multiple' ? renderSelectAllCheckbox() : null}
  {renderOptions()}
</Select>
</Form.Item>
    </ConfigProvider>
  );
};

export default IrmSelect;