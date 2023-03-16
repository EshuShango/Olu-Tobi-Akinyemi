/* eslint-disable jsx-a11y/alt-text */
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Input,
  Image,
  Link,
  Avatar,
  AvatarBadge,
  AvatarGroup,
  Wrap,
  WrapItem,
  Portal,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  Stack,
  PopoverAnchor,
} from "@chakra-ui/react";
import { PhoneIcon, AddIcon,ViewIcon, WarningIcon, ArrowForwardIcon, EmailIcon } from '@chakra-ui/icons'
import { ChevronRightIcon } from "@chakra-ui/icons";
import React from "react";

export default function Navbar() {
  const { isOpen, onClick, onOpen, onClose } = useDisclosure();
  const [scrollBehavior, setScrollBehavior] = React.useState("inside");

  const btnRef = React.useRef(null);

  // const OverlayOne = () => (
  //   <ModalOverlay
  //     bg="blackAlpha.300"
  //     backdropFilter="blur(10px) hue-rotate(90deg)"
  //   />
  // );

  const OverlayTwo = () => (
    <ModalOverlay
      bg="none"
      backdropFilter="auto"
      backdropInvert="80%"
      backdropBlur="2px"
    />
  );

  const [overlay, setOverlay] = React.useState(<OverlayTwo />);
  // figure out how to get the drawer to open solo
  // let { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Breadcrumb
      spacing="8px"
      // eslint-disable-next-line react/jsx-no-undef
      separator={<ChevronRightIcon color="teal.500" />}
    >
      <BreadcrumbSeparator>
        <BreadcrumbItem isCurrentPage>
          {/* <BreadcrumbLink href="https://linktr.ee/oluanpm nuakin">About Me</BreadcrumbLink> */}
          <BreadcrumbLink color="teal.500" href="#">
            {/* Separate within, put an image */}
            {/* <Link
              ml="4"
              onClick={() => {
                setOverlay(<OverlayTwo />);
                onOpen();
              }}
            >
              About Me
            </Link> */}
            <Button
              className="vibrate"
              ml="4"
              onClick={() => {
                setOverlay(<OverlayTwo />);
                onOpen();
              }}
            >
              About Me
            </Button>

            <Modal
              onClose={onClose}
              finalFocusRef={btnRef}
              isOpen={isOpen}
              scrollBehavior={scrollBehavior}
            ></Modal>
            <Modal onClose={onClose} isOpen={isOpen} isCentered>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>My Story</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Wrap>
                    <WrapItem>
                      <Avatar
                        name="øLu Tobi Akinyemi"
                        src="https://scontent.ffcm1-1.fna.fbcdn.net/v/t39.30808-6/285848306_130339899629855_1779980861575582268_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=a26aad&_nc_ohc=hFNvdCS6rGcAX84qbWM&_nc_ht=scontent.ffcm1-1.fna&oh=00_AfCVvszMHX7T-FcbnHhCn3YfLfk0MJP8aeAQVBTazE3ZSw&oe=6416A5B6"
                        size="md"
                      />
                    </WrapItem>
                  </Wrap>
                  Creative thinker and capable humane being. Aspiring to spread
                  Awareness and Empathy through out the world by utilizing the
                  Arts, Technology and Human interaction. <br />
                  Over 10 years of creative experience; Ranging from UI/UX
                  conceptual design to hi-fidelity wireframes, Visual design,
                  Creative Direction, Product design, Audio engineering ,
                  Musical production, Visual(Film, Photography, Collage) and
                  Literature Art.
                  <br />
                  Ambitious, disciplined and a motivated learner with leadership
                  tendencies, but still able to work well with a team. Along
                  with great communication, social and organizational skills.{" "}
                  <br /> A few things I am a, ·Visioneer ·Multi Disciplinary
                  Artist ·Polymath ·Mastering Self ·Student of ALL <br />
                  "No matter How Hard you study, if you do not become one with
                  the art you pursue you can never truly be one with the
                  universe and the "spirit of the thing itself" will always
                  elude you." - interpretation of Miyamoto Musashi's 'Book of
                  Five Rings' - p.s...I’m currently focused on being the
                  difference I desire to see in this world 💛🙏🏾 øLu
                </ModalBody>

                <ModalFooter>
                  {/* <Image
                    borderRadius="full"
                    boxSize="100px"
                    src="../../../public/asset/øLu-head shot.png"
                    alt="øLu Tøbi Akinyemi"
                  /> */}
                  {/* <Wrap>
                    <WrapItem>
                      <Avatar
                        name="øLu Tobi Akinyemi"
                        src="../../../public/asset/øLu-head shot.png"
                      />
                    </WrapItem>
                  </Wrap> */}
                  <Button onClick={onClose}>Close</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </BreadcrumbLink>
        </BreadcrumbItem>
      </BreadcrumbSeparator>
      {/* Separate within, put an image */}

      {/* Should be a popover Carousel of my projecsts */}
      <BreadcrumbItem>
        <BreadcrumbLink color="teal.500" href="#">
          Portfolio
        </BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink color="teal.500" href="#">
          {/* FOR THE RESUME a POP OVER WITH  A MENU TO DOWNLOAD ETC */}
          Resume
        </BreadcrumbLink>
      </BreadcrumbItem>

      <Popover placement='top'>
        <PopoverTrigger>
          <Link color="teal.500">Contact</Link>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverHeader>Get in touch with me</PopoverHeader>
          <PopoverBody>
            <Stack justifyContent="center" spacing={0}>
              <Button
              
                Icon={<EmailIcon />}
                colorScheme="teal"
                variant="solid"
              >
                {/* This should pop over or draw out an email form */}
                Email
              </Button>
              {/* <Button
                rightIcon={<ArrowForwardIcon />}
                colorScheme="teal"
                variant="outline"
              >
                Call us
              </Button> */}
            </Stack>
          </PopoverBody>
        </PopoverContent>
      </Popover>

      {/* could do a drawer */}

      {/* (<Drawer isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay />
     
            <Link color="teal.500" onClick={onOpen}>
              Contact
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Contact Me</DrawerHeader>

          <DrawerBody>
            <form
              id="my-form"
              onSubmit={e => {
                e.preventDefault();
                console.log("submitted");
              }}
            >
              <Input name="nickname" placeholder="Type here..." />
              <Input name="Email" placeholder="Type here..." />
              <Input name="Number" placeholder="Type here..." />
            </form>
          </DrawerBody>

          <DrawerFooter>
            <Button type="submit" form="my-form">
              Save
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>) */}

      <BreadcrumbItem>
        <BreadcrumbLink color="teal.500" href="#"></BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
    // </Link> */}
  );
}

{
  /* /* <Breadcrumb spacing='8px' separator={<ChevronRightIcon color='gray.500' />}>
<BreadcrumbItem>
<BreadcrumbLink href='#'>Home</BreadcrumbLink>
</BreadcrumbItem>

<BreadcrumbItem>
<BreadcrumbLink href='#'>About</BreadcrumbLink>
</BreadcrumbItem>

<BreadcrumbItem isCurrentPage>
<BreadcrumbLink href='#'>Contact</BreadcrumbLink>
</BreadcrumbItem>
</Breadcrumb> */
}
