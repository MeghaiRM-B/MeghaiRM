import { Select, ConfigProvider } from 'antd';
import React, { useEffect, useState } from 'react';

export interface SelectProps {
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
      setSelectedItems(value);
      onChange && onChange(value);
    }
  };

  useEffect(() => {
    setSelectedItems(defaultValue as string[] || []);
  }, [defaultValue]);

  return (
    <ConfigProvider
      theme={{
        components: {
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
      <Select
        {...restProps}
        mode={mode}
        options={mode === 'multiple' ? [selectAllOption, ...options] : options}
        value={selectedItems}
        onChange={handleChange}
        filterOption={(input, option) => option ? option.label.toLowerCase().includes(input.toLowerCase()) : false}
      />
    </ConfigProvider>
  );
};

export default IrmSelect;