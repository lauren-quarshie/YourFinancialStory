import React from "react";
import { motion } from "motion/react";
import {
  DollarSign,
  TrendingUp,
  TrendingDown,
  Target,
  PiggyBank,
} from "lucide-react";
import { Button } from "../ui/button";

interface MobileActionCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  actionText: string;
  onAction?: () => void;
  delay?: number;
  variant?: "primary" | "secondary";
}

function MobileActionCard({
  icon: Icon,
  title,
  description,
  actionText,
  onAction,
  delay = 0,
  variant = "primary",
}: MobileActionCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay }}
      className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20"
    >
      <div className="flex items-center gap-3 mb-3">
        <div
          className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
            variant === "primary"
              ? "bg-gradient-to-r from-emerald-400 to-teal-500"
              : "bg-gradient-to-r from-purple-400 to-pink-500"
          }`}
        >
          <Icon className="w-5 h-5 text-white" />
        </div>
        <div className="flex-1 text-left">
          <h4 className="text-white font-medium text-left">{title}</h4>
        </div>
      </div>
      <p className="text-white/70 text-sm mb-4 leading-relaxed text-left">
        {description}
      </p>
      <Button
        onClick={onAction}
        size="sm"
        className="w-full bg-white text-black hover:bg-white/90 font-medium rounded-xl"
      >
        {actionText}
      </Button>
    </motion.div>
  );
}

export function MobileTotalSpendingSlide() {
  const totalSpent = 3247.82;
  const previousMonth = 2895.64;
  const difference = totalSpent - previousMonth;
  const percentageChange = (
    (difference / previousMonth) *
    100
  ).toFixed(1);
  const isIncrease = difference > 0;
  const suggestedBudget =
    Math.ceil((totalSpent * 0.95) / 100) * 100;

  return (
    <div className="h-full w-full flex flex-col text-center px-6 bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 overflow-y-auto py-8 pb-32 relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-8 w-32 h-32 border border-white rounded-full"></div>
        <div className="absolute bottom-20 left-8 w-24 h-24 border border-white rounded-full"></div>
      </div>

      <div className="flex-1 flex flex-col justify-center">
        <motion.div
          initial={{ scale: 0, rotate: -90 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            type: "spring",
          }}
          className="w-20 h-20 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full flex items-center justify-center mb-6 mx-auto shadow-2xl shadow-emerald-500/30"
        >
          <DollarSign className="w-10 h-10 text-white" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-white/80 mb-2"
        >
          You spent a total of
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            delay: 0.6,
            type: "spring",
          }}
          className="text-4xl text-white mb-3 font-medium"
        >
          £{totalSpent.toLocaleString()}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex items-center justify-center gap-2 text-white/80 mb-8"
        >
          {isIncrease ? (
            <TrendingUp className="w-4 h-4 text-green-400" />
          ) : (
            <TrendingDown className="w-4 h-4 text-green-400" />
          )}
          <span
            className={
              isIncrease ? "text-green-400" : "text-green-400"
            }
          >
            {isIncrease ? "+" : ""}
            {percentageChange}%
          </span>
          <span>from last month</span>
        </motion.div>
      </div>

      <div className="space-y-3">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-white font-medium mb-4 flex items-center justify-center gap-2"
        >
          <span>💡</span>
          <span>Smart Actions</span>
        </motion.h3>

        <MobileActionCard
          icon={Target}
          title="Set Budget Goal"
          description={`Try spending 5% less (£${suggestedBudget.toLocaleString()}) next month to improve your financial health`}
          actionText="Create Budget"
          delay={1.2}
          onAction={() =>
            alert("Budget setting feature would open here!")
          }
        />

        {isIncrease && (
          <MobileActionCard
            icon={PiggyBank}
            title="Savings Challenge"
            description={`Turn your extra spending into savings! Save £${difference.toFixed(2)} this month`}
            actionText="Start Challenge"
            delay={1.4}
            variant="secondary"
            onAction={() =>
              alert("Savings challenge would start here!")
            }
          />
        )}
      </div>
    </div>
  );
}