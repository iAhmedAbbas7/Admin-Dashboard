// <== IMPORTS ==>
import {
  BadgeCheck,
  Candy,
  Citrus,
  Info,
  Mail,
  MapPin,
  Phone,
  Settings,
  Shield,
  User2,
  Calendar,
  Badge as BadgeIcon,
  Edit,
} from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import EditUser from "@/components/user/EditUser";
import CardList from "@/components/common/CardList";
import { Progress } from "@/components/ui/progress";
import AppLineChart from "@/components/chart/AppLineChart";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// <== SINGLE USER PAGE COMPONENT ==>
const SingleUserPage = () => {
  // RETURNING THE SINGLE USER PAGE CONTENT
  return (
    // MAIN CONTAINER
    <div>
      {/* BREADCRUMB */}
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/users">Users</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Ahmed Abbas</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      {/* PAGE CONTENT CONTAINER */}
      <div className="mt-4 flex flex-col xl:flex-row gap-8">
        {/* LEFT SECTION */}
        <div className="w-full xl:w-1/3 space-y-6">
          {/* USER BADGES CONTAINER */}
          <div className="bg-primary-foreground p-4 rounded-lg">
            {/* TITLE */}
            <div className="text-xl font-semibold flex items-center gap-2 mb-2">
              <BadgeIcon />
              <span>User Badges</span>
            </div>
            {/* BADGES */}
            <div className="flex gap-4 mt-4">
              {/* VERIFIED USER BADGE */}
              <HoverCard>
                <HoverCardTrigger>
                  <BadgeCheck
                    size={36}
                    className="rounded-full bg-blue-500/30 border border-blue-500/50 p-2"
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <div className="flex items-center gap-2 mb-2">
                    <User2 />
                    <span className="font-bold">Verified User</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    This is a Verified User Badge
                  </p>
                </HoverCardContent>
              </HoverCard>
              {/* ADMIN USER BADGE */}
              <HoverCard>
                <HoverCardTrigger>
                  <Shield
                    size={36}
                    className="rounded-full bg-green-800/30 border border-green-800/50 p-2"
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <div className="flex items-center gap-2 mb-2">
                    <User2 />
                    <span className="font-bold">Admin</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Admin Users have access to all Features
                  </p>
                </HoverCardContent>
              </HoverCard>
              {/* AWARDED USER BADGE */}
              <HoverCard>
                <HoverCardTrigger>
                  <Candy
                    size={36}
                    className="rounded-full bg-yellow-500/30 border border-yellow-500/50 p-2"
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <div className="flex items-center gap-2 mb-2">
                    <User2 />
                    <span className="font-bold">Awarded</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    This User has been Awarded for their Contributions
                  </p>
                </HoverCardContent>
              </HoverCard>
              {/* POPULAR USER BADGE */}
              <HoverCard>
                <HoverCardTrigger>
                  <Citrus
                    size={36}
                    className="rounded-full bg-orange-500/30 border border-orange-500/50 p-2"
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <div className="flex items-center gap-2 mb-2">
                    <User2 />
                    <span className="font-bold">Popular</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    This User is very Popular in the Community
                  </p>
                </HoverCardContent>
              </HoverCard>
            </div>
          </div>
          {/* INFORMATION CONTAINER */}
          <div className="bg-primary-foreground p-4 rounded-lg">
            {/* TITLE & EDIT BUTTON */}
            <div className="flex items-center justify-between">
              {/* TITLE */}
              <div className="text-xl font-semibold flex items-center gap-2 mb-2">
                <Info />
                <span>User Information</span>
              </div>
              {/* EDIT TRIGGER */}
              <Sheet>
                <SheetTrigger asChild>
                  <Button className="cursor-pointer">
                    <Edit /> Edit User
                  </Button>
                </SheetTrigger>
                {/* EDIT USER COMPONENT */}
                <EditUser />
              </Sheet>
            </div>
            {/* INFORMATION */}
            <div className="space-y-4 mt-4">
              {/* PROFILE COMPLETION */}
              <div className="flex flex-col gap-2 mb-8">
                <p className="text-sm text-muted-foreground">
                  Profile Completion
                </p>
                <Progress value={75} />
              </div>
              {/* USERNAME */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <User2 size={20} />{" "}
                  <span className="font-semibold">Username:</span>
                </div>
                <span>iAhmedAbbas7</span>
              </div>
              {/* EMAIL */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Mail size={20} />{" "}
                  <span className="font-semibold">Email:</span>
                </div>
                <span>iahmedabbas7@gamil.com</span>
              </div>
              {/* PHONE NUMBER */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Phone size={20} />{" "}
                  <span className="font-semibold">Phone No:</span>
                </div>
                <span>0311-6474871</span>
              </div>
              {/* LOCATION */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <MapPin size={20} />{" "}
                  <span className="font-semibold">Location:</span>
                </div>
                <span>Okara, Punjab, Pakistan</span>
              </div>
              {/* ROLE */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Settings size={20} />{" "}
                  <span className="font-semibold">Role:</span>
                </div>
                <Badge variant="secondary">Admin</Badge>
              </div>
              {/* JOINING DATE */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Calendar size={20} />{" "}
                  <span className="font-semibold">Joining Date:</span>
                </div>
                <span>{new Date().toDateString()}</span>
              </div>
            </div>
          </div>
          {/* CARD LIST CONTAINER */}
          <div className="bg-primary-foreground p-4 rounded-lg">
            <CardList title="Latest Transactions" />
          </div>
        </div>
        {/* RIGHT SECTION */}
        <div className="w-full xl:w-2/3 space-y-6">
          {/* USER CARD CONTAINER */}
          <div className="bg-primary-foreground p-4 rounded-lg space-y-2">
            {/* AVATAR */}
            <div className="flex items-center gap-2">
              <Avatar className="size-12">
                <AvatarImage src="https://avatars.githubusercontent.com/u/166436609" />
                <AvatarFallback>AA</AvatarFallback>
              </Avatar>
              {/* NAME */}
              <h1 className="text-xl font-semibold">Ahmed Abbas</h1>
            </div>
            {/* BIO */}
            <p className="text-sm text-muted-foreground">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Aspernatur sed perferendis dolorem nisi commodi eum ea ullam
              maxime at. Voluptatum aut doloremque labore dolor. Repellat
              officiis voluptatem est debitis molestias. Ad iste maxime
              quibusdam sapiente expedita, rerum dolore voluptatibus corporis
              veniam.
            </p>
          </div>
          {/* CHART CONTAINER */}
          <div className="bg-primary-foreground p-4 rounded-lg">
            <AppLineChart />
          </div>
        </div>
      </div>
    </div>
  );
};

// <== EXPORTING THE SINGLE USER PAGE COMPONENT ==>
export default SingleUserPage;
