import { TabsContent } from '@/components/ui/tabs'

export const SettingsTab = () => {
  return (
    <TabsContent
      value="settings"
      className="mt-4 py-3 border rounded-md bg-neutral-50 dark:bg-neutral-950 h-full"
    >
      <div className="w-full flex flex-1 items-center h-full"></div>
    </TabsContent>
  )
}
