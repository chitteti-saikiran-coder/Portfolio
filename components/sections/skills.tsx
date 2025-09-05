"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { skills } from '@/data/skills'
import { cn } from '@/lib/utils'

const skillCategories = [
  { name: 'Backend', skills: skills.backend, color: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300' },
  { name: 'Frontend', skills: skills.frontend, color: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300' },
  { name: 'Cloud & AI', skills: skills.cloud, color: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300' },
  { name: 'Tools', skills: skills.tools, color: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300' },
]

export function Skills() {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null)
  const [showAll, setShowAll] = useState(false)

  const visibleCategories = showAll ? skillCategories : skillCategories.slice(0, 2)

  return (
    <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Skills & Technologies
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise across different domains
          </p>
        </motion.div>

        <TooltipProvider>
          <div className="space-y-8">
            {visibleCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-foreground">
                    {category.name}
                  </h3>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setExpandedCategory(
                      expandedCategory === category.name ? null : category.name
                    )}
                    className="flex items-center gap-1"
                  >
                    {expandedCategory === category.name ? (
                      <>
                        <span className="text-sm">Show Less</span>
                        <ChevronUp className="h-4 w-4" />
                      </>
                    ) : (
                      <>
                        <span className="text-sm">Show All</span>
                        <ChevronDown className="h-4 w-4" />
                      </>
                    )}
                  </Button>
                </div>

                <div className="flex flex-wrap gap-3">
                  {(expandedCategory === category.name 
                    ? category.skills 
                    : category.skills.slice(0, 4)
                  ).map((skill, skillIndex) => (
                    <Tooltip key={skillIndex}>
                      <TooltipTrigger asChild>
                        <Badge
                          variant="secondary"
                          className={cn(
                            "px-3 py-1 text-sm font-medium cursor-pointer transition-all hover:scale-105",
                            category.color
                          )}
                        >
                          {skill.name}
                        </Badge>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="font-medium">{skill.name}</p>
                        <p className="text-xs text-muted-foreground">
                          Proficiency: {skill.level}
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  ))}
                  
                  {category.skills.length > 4 && expandedCategory !== category.name && (
                    <Badge
                      variant="outline"
                      className="px-3 py-1 text-sm cursor-pointer hover:bg-accent"
                      onClick={() => setExpandedCategory(category.name)}
                    >
                      +{category.skills.length - 4} more
                    </Badge>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </TooltipProvider>

        {!showAll && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-8"
          >
            <Button
              variant="outline"
              onClick={() => setShowAll(true)}
              className="flex items-center gap-2"
            >
              <ChevronDown className="h-4 w-4" />
              Show All Categories
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  )
}

