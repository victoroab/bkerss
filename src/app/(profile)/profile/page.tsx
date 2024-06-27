import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { NotebookPenIcon, Settings, ShoppingBag } from 'lucide-react'

export default function ProfilePage() {
  return (
    <div className="w-full min-h-80 h-96 flex flex-col flex-1 gap-7 pt-8">
      <h1 className="text-2xl font-semibold">Profile</h1>

      <Tabs defaultValue="bio">
        <TabsList>
          <TabsTrigger value="bio" className="flex items-center gap-2">
            <NotebookPenIcon /> Bio
          </TabsTrigger>

          <TabsTrigger value="products" className="flex items-center gap-2">
            <ShoppingBag /> Products
          </TabsTrigger>

          <TabsTrigger value="settings" className="flex items-center gap-2">
            <Settings /> Settings
          </TabsTrigger>
        </TabsList>
        <TabsContent
          value="bio"
          className="mt-4 py-3 border rounded-md bg-neutral-50 dark:bg-neutral-950 h-full"
        >
          <div className="w-full flex flex-1 items-center h-full"></div>
        </TabsContent>
        <TabsContent
          value="settings"
          className="mt-4 py-3 border rounded-md bg-neutral-50 dark:bg-neutral-950 h-full"
        >
          <div className="w-full flex flex-1 items-center h-full"></div>
        </TabsContent>
        <TabsContent
          value="products"
          className="mt-4 py-3 border rounded-md bg-neutral-50 dark:bg-neutral-950 h-full"
        >
          <div className="w-full flex flex-1 items-center h-full"></div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
