import { useDisclosure } from "@chakra-ui/react";
import {
  // BreadcrumbSeparator,
  // Avatar,
  // AvatarBadge,
  // AvatarGroup,
  Portal,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  Image,
  // PopoverAnchor,
  Button,
  // Modal,
  // ModalOverlay,
  // ModalContent,
  // ModalHeader,
  // ModalFooter,
  // ModalBody,
  // ModalCloseButton,
} from "@chakra-ui/react";

export default function abtMe () {
  return (
    function VerticallyCenter() {
      
      const { isOpen, onOpen, onClose } = useDisclosure()
    
      return (
        
         
        <Popover>
          <PopoverTrigger>
            <Button
            // eslint-disable-next-line react/jsx-no-undef
            >
              About Me
            </Button>
          </PopoverTrigger>
          <Portal
          // eslint-disable-next-line react/jsx-no-undef
          >
            <PopoverContent>
              <PopoverArrow />
              <PopoverHeader>My Story</PopoverHeader>
              <PopoverCloseButton />
              <PopoverBody>
                  <Button
                    // eslint-disable-next-line react/jsx-no-undef
                    colorScheme="blue"
                  >
                    Button
                  </Button>
              </PopoverBody>
              <PopoverFooter>This is the footer</PopoverFooter>
            </PopoverContent>
          </Portal>
        </Popover>
       
      )
    }
    );
  }
  