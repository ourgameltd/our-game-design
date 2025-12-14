interface PageTitleProps {
  title: string;
  subtitle?: string;
  badge?: string | number;
  action?: {
    label: string;
    onClick: () => void;
    variant?: 'primary' | 'success' | 'danger' | 'warning';
  };
}

export default function PageTitle({ title, subtitle, badge, action }: PageTitleProps) {
  const getActionButtonClass = (variant: string = 'primary') => {
    const baseClass = 'btn-md';
    const variantClass = {
      primary: 'btn-primary',
      success: 'btn-success',
      danger: 'btn-danger',
      warning: 'btn-warning',
    }[variant] || 'btn-primary';
    
    return `${baseClass} ${variantClass}`;
  };

  return (
    <div className="flex items-center justify-between mb-6">
      <div>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
          {title}
          {badge !== undefined && (
            <span className="ml-2 text-base font-normal text-gray-600 dark:text-gray-400">
              ({badge})
            </span>
          )}
        </h2>
        {subtitle && (
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            {subtitle}
          </p>
        )}
      </div>
      {action && (
        <button
          onClick={action.onClick}
          className={getActionButtonClass(action.variant)}
        >
          {action.label}
        </button>
      )}
    </div>
  );
}
