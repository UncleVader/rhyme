"use client"

import {zodResolver} from "@hookform/resolvers/zod"
import {useForm} from "react-hook-form"
import {z} from "zod"

import {Button} from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import {Input} from "@/components/ui/input"
import {FC, useState} from "react";
import {cn} from "@/lib/utils";
import {CircleCheckBig} from "lucide-react";
import {addToMailingList} from "@/lib/services";
import toast, {Toaster} from 'react-hot-toast';

const formSchema = z.object({
  email: z
    .string()
    .min(1, {message: "This field has to be filled.",})
    .email("Enter correct email")
})

interface IProps {
  className?: string
}

export const EmailForm: FC<IProps> = ({className}) => {
  const [isLoading, setIsLoading] = useState(false)
  const [emailSent, setEmailSent] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  })

  async function onSubmit(formData: z.infer<typeof formSchema>) {
    setIsLoading(true)
    await addToMailingList(formData.email)
      .then(() => {
        setEmailSent(true)
      })
      .catch(() => {
        toast.error('Something went wrong, the email has not been processed, please try again later ')
      })
    setIsLoading(false)

  }

  return (
    <Form {...form} >
      <Toaster/>

      <div
        className={cn(
          "p-5 pb-[60px] md:pb-5 sm:rounded-[20px] sm:border-2 bg-light-2",
          className || ''
        )}
      >
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className={
            cn(
              "flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full",
              {"opacity-30 pointer-events-none": isLoading}
            )
          }
        >
          {emailSent
            ?
            <div
              className={"flex items-center gap-2 bg-light px-6 py-4 text-[16px] font-medium rounded-full border border-grey-border flex-grow justify-center pointer-events-none"}
            >
              <div className={"text-green"}><CircleCheckBig/></div>
              You’re on the list!
            </div>
            :
            <FormField
              control={form.control}
              name="email"
              render={({field}) => (
                <FormItem className={"h-full flex-grow w-full sm:w-auto"}>
                  <FormControl className={"h-full flex-grow"}>
                    <Input
                      placeholder="Add your email" {...field}
                      className={"p-4 rounded-full bg-light text-[16px] font-medium"}
                      data-form-input
                    />
                  </FormControl>
                  <FormMessage/>
                </FormItem>
              )}
            />
          }

          {!emailSent && <Button
            type="submit"
            variant={"yellow"}
            className={"mt-0 h-full px-8 w-full sm:w-auto transition-none"}
            data-form-button
          >Join the waitlist</Button>
          }
        </form>
      </div>
    </Form>
  )
}
