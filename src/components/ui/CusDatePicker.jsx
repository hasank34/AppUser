import { Datepicker } from "@ui-kitten/components";

const CusDatePicker = (props) => {
  const { onSelectDate } = props;
  return (
    <Datepicker {...props} onSelect={(nextDate) => onSelectDate(nextDate)} />
  );
};

export default CusDatePicker;
