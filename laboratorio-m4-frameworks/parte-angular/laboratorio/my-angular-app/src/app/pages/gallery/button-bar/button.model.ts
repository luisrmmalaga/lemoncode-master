export interface Button {
  id: string;
  icon?: string;
  label?: string;
  action: () => void;
  disabled: () => boolean;
  hidden: () => boolean;
  type?: string;
}
