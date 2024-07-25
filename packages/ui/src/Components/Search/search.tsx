import { SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";

interface SearchProps {
  placeholder?: string;
  searchtext: string;
  handleChange: (e: any) => any;
  classNames?: string;
  styles?: any;
  enableSearch?: boolean;
  showIcon?: boolean;
  size?: any;
}

const Search = ({
  placeholder,
  searchtext,
  handleChange,
  classNames,
  styles,
  enableSearch = true,
  showIcon = true,
  size = "default",
}: SearchProps) => {
  return enableSearch ? (
    <div className={`search-bar ${enableSearch ? "" : "hide-search"}`}>
      <Input
        placeholder={placeholder}
        allowClear
        size={size}
        onChange={(e) => handleChange(e)}
        value={searchtext}
        prefix={showIcon && <SearchOutlined />}
        style={styles}
      ></Input>
    </div>
  ) : null;
};

export default Search;
