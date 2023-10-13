import { AlertTriangle } from '@teable-group/icons';
import { Button } from '@teable-group/ui-lib';
import classNames from 'classnames';

interface INodeStatus {
  isActive: boolean;
}

const NodeStatus = (props: INodeStatus) => {
  const { isActive } = props;

  return (
    <Button variant="outline" className="group box-content border-2 rounded-full" size="xs">
      <div className="flex justify-center items-center">
        <AlertTriangle></AlertTriangle>
        <div
          className={classNames(
            // 'group-hover:max-w-xs group-hover:pl-2',
            'truncate overflow-hidden transition-all ease first-letter:max-w-0',
            isActive ? 'max-w-xs pl-2' : 'max-w-0'
          )}
        >
          Finish configuration
        </div>
      </div>
    </Button>
  );
};

export { NodeStatus };
