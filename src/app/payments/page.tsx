// <== IMPORTS ==>
import { DataTable } from "./data-table";
import { Payment, columns } from "./columns";
import { LucideCircleDollarSign } from "lucide-react";

// <== GET DATA FUNCTION ==>
const getPayments = async (): Promise<Payment[]> => {
  return [
    {
      id: "728ed521",
      amount: 134,
      status: "pending",
      fullName: "John Doe",
      userId: "4593",
      email: "johndoe@gmail.com",
    },
    {
      id: "728ed522",
      amount: 124,
      status: "success",
      fullName: "Jane Doe",
      userId: "8821",
      email: "janedoe@gmail.com",
    },
    {
      id: "728ed523",
      amount: 167,
      status: "success",
      fullName: "Mike Galloway",
      userId: "5847",
      email: "mikegalloway@gmail.com",
    },
    {
      id: "728ed524",
      amount: 156,
      status: "failed",
      fullName: "Minerva Robinson",
      userId: "9034",
      email: "minerbarobinson@gmail.com",
    },
    {
      id: "728ed525",
      amount: 145,
      status: "success",
      fullName: "Mable Clayton",
      userId: "973",
      email: "mableclayton@gmail.com",
    },
    {
      id: "728ed526",
      amount: 189,
      status: "pending",
      fullName: "Nathan McDaniel",
      userId: "1630",
      email: "nathanmcdaniel@gmail.com",
    },
    {
      id: "728ed527",
      amount: 178,
      status: "success",
      fullName: "Myrtie Lamb",
      userId: "6028",
      email: "myrtielamb@gmail.com",
    },
    {
      id: "728ed528",
      amount: 190,
      status: "success",
      fullName: "Leona Bryant",
      userId: "9190",
      email: "leonabryant@gmail.com",
    },
    {
      id: "728ed529",
      amount: 134,
      status: "failed",
      fullName: "Aaron Willis",
      userId: "3813",
      email: "aaronwillis@gmail.com",
    },
    {
      id: "728ed52a",
      amount: 543,
      status: "success",
      fullName: "Joel Keller",
      userId: "6178",
      email: "joelkeller@gmail.com",
    },
    {
      id: "728ed52b",
      amount: 234,
      status: "pending",
      fullName: "Daniel Ellis",
      userId: "6630",
      email: "danielellis@gmail.com",
    },
    {
      id: "728ed52c",
      amount: 345,
      status: "success",
      fullName: "Gordon Kennedy",
      userId: "180",
      email: "gordonkennedy@gmail.com",
    },
    {
      id: "728ed52d",
      amount: 335,
      status: "failed",
      fullName: "Emily Hoffman",
      userId: "432",
      email: "emilyhoffman@gmail.com",
    },
    {
      id: "728ed52e",
      amount: 664,
      status: "pending",
      fullName: "Jeffery Garrett",
      userId: "7598",
      email: "jefferygarrett@gmail.com",
    },
    {
      id: "728ed52f",
      amount: 332,
      status: "success",
      fullName: "Ralph Baker",
      userId: "10034",
      email: "ralphbaker@gmail.com",
    },
    {
      id: "728ed52g",
      amount: 413,
      status: "failed",
      fullName: "Seth Fields",
      userId: "2515",
      email: "sethfields@gmail.com",
    },
    {
      id: "728ed52h",
      amount: 345,
      status: "pending",
      fullName: "Julia Webb",
      userId: "9950",
      email: "juliawebb@gmail.com",
    },
    {
      id: "728ed52i",
      amount: 754,
      status: "success",
      fullName: "Gary Banks",
      userId: "9726",
      email: "garybanks@gmail.com",
    },
    {
      id: "728ed52j",
      amount: 643,
      status: "failed",
      fullName: "Flora Chambers",
      userId: "4350",
      email: "florachambers@gmail.com",
    },
    {
      id: "728ed52k",
      amount: 543,
      status: "pending",
      fullName: "Steve Hanson",
      userId: "587",
      email: "stevehanson@gmail.com",
    },
    {
      id: "728ed52l",
      amount: 324,
      status: "success",
      fullName: "Lola Robinson",
      userId: "5152",
      email: "lolarobinson@gmail.com",
    },
    {
      id: "728ed52m",
      amount: 123,
      status: "pending",
      fullName: "Ethel Waters",
      userId: "562",
      email: "ethelwaters@gmail.com",
    },
    {
      id: "728ed52n",
      amount: 422,
      status: "failed",
      fullName: "Grace Edwards",
      userId: "215",
      email: "graceedwards@gmail.com",
    },
    {
      id: "728ed52o",
      amount: 712,
      status: "success",
      fullName: "Sallie Wong",
      userId: "947",
      email: "salliewong@gmail.com",
    },
    {
      id: "728ed52p",
      amount: 360,
      status: "success",
      fullName: "Bryan Gutierrez",
      userId: "3988",
      email: "bryangutierrez@gmail.com",
    },
    {
      id: "728ed52q",
      amount: 454,
      status: "pending",
      fullName: "Erik Rice",
      userId: "9816",
      email: "erikrice@gmail.com",
    },
    {
      id: "728ed52r",
      amount: 382,
      status: "success",
      fullName: "Jordan Atkins",
      userId: "1285",
      email: "jordanatkins@gmail.com",
    },
    {
      id: "728ed52s",
      amount: 328,
      status: "failed",
      fullName: "Bill Brewer",
      userId: "5911",
      email: "billbrewer@gmail.com",
    },
    {
      id: "728ed52t",
      amount: 250,
      status: "success",
      fullName: "Edwin Morris",
      userId: "4225",
      email: "edwinmorris@gmail.com",
    },
    {
      id: "728ed52u",
      amount: 658,
      status: "success",
      fullName: "Harold Becker",
      userId: "5966",
      email: "haroldbecker@gmail.com",
    },
    {
      id: "728ed52v",
      amount: 691,
      status: "success",
      fullName: "Hannah Rodriguez",
      userId: "3021",
      email: "hannahrodriguez@gmail.com",
    },
    {
      id: "728ed52w",
      amount: 969,
      status: "success",
      fullName: "Zachary Beck",
      userId: "1497",
      email: "zacharybeck@gmail.com",
    },
    {
      id: "728ed52x",
      amount: 617,
      status: "failed",
      fullName: "Frances Potter",
      userId: "1837",
      email: "francespotter@gmail.com",
    },
    {
      id: "728ed52y",
      amount: 173,
      status: "success",
      fullName: "Raymond Murray",
      userId: "438",
      email: "raymondmurray@gmail.com",
    },
    {
      id: "728ed52z",
      amount: 843,
      status: "success",
      fullName: "Adam Sherman",
      userId: "2838",
      email: "adamsherman@gmail.com",
    },
    {
      id: "728ed521f",
      amount: 914,
      status: "pending",
      fullName: "Anne Cruz",
      userId: "7955",
      email: "annecruz@gmail.com",
    },
  ];
};

// <== PAYMENTS PAGE COMPONENT ==>
const PaymentsPage = async () => {
  // FETCHING THE PAYMENTS
  const payments = await getPayments();
  // RETURNING THE PAYMENTS PAGE CONTENT
  return (
    // MAIN CONTAINER
    <div className="mb-8">
      {/* PAGE HEADER */}
      <div className="flex items-center gap-2 mb-8 px-4 py-2 bg-secondary rounded-md">
        <LucideCircleDollarSign />{" "}
        <h1 className="font-semibold">All Payments</h1>
      </div>
      {/* DATA TABLE */}
      <DataTable columns={columns} data={payments} />
    </div>
  );
};

// <== EXPORTING THE PAYMENTS PAGE COMPONENT ==>
export default PaymentsPage;
