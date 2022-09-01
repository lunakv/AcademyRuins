import { transformRuleText } from "../utils/ruleChangeTransform";
import { Diff } from "../types";

interface ColumnDiffProps {
  row: Diff;
}

const rowId = (row: Diff) => (row.new ? row.new.ruleNum : "d" + row.old?.ruleNum);

const ColumnDiffRow = ({ row }: ColumnDiffProps) => {
  const [oldText, newText] = transformRuleText(row.old?.ruleText, row.new?.ruleText);
  return (
    <tr id={rowId(row)}>
      <td id={row.old && "o" + row.old.ruleNum}>
        <b>{row.old?.ruleNum}</b>
        <br />
        {oldText}
      </td>
      <td id={row.new && "n" + row.new.ruleNum}>
        <b>{row.new?.ruleNum}</b>
        <br />
        {newText}
      </td>
    </tr>
  );
};

export default ColumnDiffRow;
