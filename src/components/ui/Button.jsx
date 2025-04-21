// src/components/ui/Button.jsx
import { forwardRef } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { getTheme } from '../../styles/theme';

const Button = forwardRef(({ 
  children, 
  variant = 'primary', // primary, secondary, outline, text
  size = 'md', // sm, md, lg
  fullWidth = false,
  icon,
  className = '',
  ...props 
}, ref) => {
  const { darkMode } = useTheme();
  const theme = getTheme(darkMode);
  
  // Style maps based on variant
  const variantStyles = {
    primary: {
      bg: theme.primary,
      text: 'white',
      hover: theme.primaryLight,
      border: 'transparent'
    },
    secondary: {
      bg: theme.secondary,
      text: 'white',
      hover: darkMode ? '#5D54E6' : '#4F46E5',
      border: 'transparent'
    },
    outline: {
      bg: 'transparent',
      text: theme.text,
      hover: theme.surfaceHover,
      border: theme.border
    },
    text: {
      bg: 'transparent',
      text: theme.primary,
      hover: theme.surfaceHover,
      border: 'transparent'
    }
  };
  
  // Size maps
  const sizeStyles = {
    sm: 'px-3 py-1 text-sm',
    md: 'px-4 py-2',
    lg: 'px-6 py-3 text-lg'
  };
  
  const selectedVariant = variantStyles[variant] || variantStyles.primary;
  const selectedSize = sizeStyles[size] || sizeStyles.md;
  
  const buttonStyles = {
    backgroundColor: selectedVariant.bg,
    color: selectedVariant.text,
    borderColor: selectedVariant.border
  };
  
  return (
    <button 
      ref={ref}
      className={`
        ${selectedSize} 
        ${fullWidth ? 'w-full' : ''} 
        ${variant === 'outline' || variant === 'text' ? 'border' : ''} 
        rounded-lg font-medium transition-colors duration-200 flex items-center justify-center
        ${className}
      `}
      style={buttonStyles}
      {...props}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
});

export default Button;
